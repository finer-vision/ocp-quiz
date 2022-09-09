#include "KeypadShield.h"
#include <Adafruit_NeoPixel.h>
#include <EEPROM.h>

#define PIN 11
#define NUMPIXELS 128

#define LOCKPIN 13

const byte ROWS = 4; 
const byte COLS = 4; 

KeypadShield keypad;

String code;
String input_code;
String new_code;
int node = 0;
double np = 0.0;
int tr, tg, tb;
int dr, dg, db;

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup(){
  load_code();
  keypad.begin();
  Serial.begin(9600);
  pinMode(LOCKPIN, OUTPUT);
  input_code.reserve(20);
  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
  pixels.clear();  
  tr = 64;
  tg = 128;
  tb = 96;
  dr = dg = db = 1;
}
  
void loop(){
  //char key = myKeypad.getKey();
  char key = keypad.getNextKeypress();
  int i;

  if (key){    
    switch(key){
      case 's':
      case '*':
        input_code = "";
        setPixelCol(0,0,0);
        break;
      case 'p':
      case '#':
        if(code==input_code){
          Serial.println("Correct Code!");
          //disable code
          code='X' + code;
          unlock_box();
        }else{
          Serial.println("Code Incorrect!!!");
          flash_leds(150,0,0,250,3);                     
        }
        input_code = "";
      break;
      default:
        setPixelCol(0, 0, 0);
        delay(100);
        setPixelCol(50, 50, 0);
        input_code += key;
        //Serial.println(input_code);
    }
  }else{
    if(input_code == "")
      led_chase();  
  }
}

void unlock_box(){
  Serial.println();
  Serial.println("Correct Code!");
  digitalWrite(LOCKPIN, HIGH);
  flash_leds(0,150,0,500,10);
  digitalWrite(LOCKPIN, LOW);  
}

void flash_leds(byte r, byte g, byte b, int delay_ms, int count){
  setPixelCol(r,g,b);
  for(int i=0;i<count;i++){
    delay(delay_ms);
    setPixelCol(0,0,0);
    delay(delay_ms);
    setPixelCol(r,g,b);
  }
  setPixelCol(0,0,0);  
}

void led_chase(){
  np = np+0.01;
  if (np > 1){
    np = 0;
    pixels.setPixelColor(node, pixels.Color(0, 0, 0));
    node++;    
    if(node >= NUMPIXELS){
      node = 0;
    }
    pixels.setPixelColor(node, pixels.Color(tr, tg, tb));
    
    tr = constrain(tr+dr, 0, 255);
    tg=constrain(tg+dg, 0, 255);
    tb=constrain(tb+db, 0, 255);
    if(tr >= 255 || tr <= 0)
      dr = dr * -1;
    if(tg >= 255 || tg <= 0)
      dg = dg * -1;
    if(tb >= 255 || tb <= 0)
      db = db * -1;
    
    pixels.show();    
  }  
}

void setPixelCol(int r, int g, int b){
  uint32_t color = pixels.Color(r, g, b);
  pixels.fill(color,0, NUMPIXELS);
  pixels.show();    
}

void load_code(){
  byte len = EEPROM.read(0);
  if(len > 0){
    char data[len +1];

     for (int i=0;i<len;i++){
      data[i] = EEPROM.read(i+1);
     }
     data[len] = '\0';
     code = String(data);
  }else{
    code = "12345";
  }  
}

void save_code(){
  byte len = new_code.length();
  EEPROM.write(0, len);

  for (int i=0; i<len; i++){
    EEPROM.write(i+1, new_code[i]);
  }
  code = new_code;  
}

void serialEvent(){
  String validcodechars = "1234567890ABCDabcdX";
  while (Serial.available()){
    char inChar = (char)Serial.read();  
    if(inChar == '!'){
      new_code = "";
    }else if(inChar =='@'){
      save_code();
      flash_leds(0,0,150,200,3);
      Serial.println("code updated.");
    }else if(inChar =='?'){
      Serial.print("code=");
      Serial.println(code);
    }else if(inChar =='$'){
      Serial.print("entry=");
      Serial.println(input_code);    
    }else if(inChar =='%'){
      Serial.println("unlocking box");
      unlock_box();
    }else{
      if(validcodechars.indexOf(inChar) != -1){
        new_code += inChar;
      }
    }
  }
}
