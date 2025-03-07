import { nanoid } from "nanoid";

export function truncateText(text: string, maxLength = 10) {
  if (!text) return "";

  if (text?.length <= maxLength) {
    return text;
  }
  return text?.slice(0, maxLength);
}

export const generateUniqueName = (name: string) => {
  return (truncateText(name?.replace(/ /g, "_"), 10) + nanoid())?.replace(
    / /g,
    "_",
  );
};

export function isValidTokenName(name: string) {
  if (!/^[a-zA-Z]/.test(name)) {
    return { status: false, data: "Name should start with a letter" };
  }

  if (/[^a-zA-Z0-9\s\-_]/.test(name)) {
    return {
      status: false,
      data: "Only - or _ are allowed as special characters",
    };
  }

  // Check 3: It must be at least 2 characters long
  if (name?.length < 2) {
    return { status: false, data: "name must be at least 2 characters long" };
  }

  return { status: true, data: name };
}

export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const convertSVGtoURL = (value: string) => {
  const svg = new Blob([value], { type: "image/svg+xml" });
  const url = URL.createObjectURL(svg);
  return url;
};

export function hexToAscii(hex: string) {
  hex = hex.replace(/^0x/i, "");

  let str = "";
  for (let i = 0; i < hex?.length; i += 2) {
    const hexChar = hex?.substr(i, 2);
    str += String.fromCharCode(parseInt(hexChar, 16));
  }
  return str;
}

export function formatUAmount(str: string) {
  if (!str) return "";
  if (str.startsWith("u")) {
    const value = str.substring(1);
    if (isNaN(Number(value))) return value;
    return Number(value)?.toLocaleString();
  }
  return str;
}
