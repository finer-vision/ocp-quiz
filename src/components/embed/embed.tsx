import React from "react";
import { EmbedWrapper } from "@/components/embed/embed.styles";

type Props = {
  src: string;
  type?: string;
};

export default function Embed({ src, type = "text/html" }: Props) {
  return (
    <EmbedWrapper>
      <embed type={type} src={src} />
    </EmbedWrapper>
  );
}
