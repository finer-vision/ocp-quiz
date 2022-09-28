#!/usr/bin/env bash

# Portrait mode
xrandr -o left
xinput set-prop "Sharp Corp.   TPC-IC   USB HID" --type=float "Coordinate Transformation Matrix" 0 -1 1 1 0 0 0 0 1
