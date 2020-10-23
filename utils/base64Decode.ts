export default function decode(text: string) {
  if (!text) return;
  return Buffer.from(text, "base64").toString("binary");
}
