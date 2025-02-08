export const isEmail = (email: string): boolean => {
  return /^[^\*-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

export const isPhone = (phone: string): boolean => {
  // Phone should be a string
  return /^(01|8801|\+8801)[0-9]{9}$/.test(phone);
};

export const isString = (data: any): boolean => {
  // Consider narrowing the type if possible
  return typeof data === "string" && /^[a-z@\. ]*$/.test(data); // Added space and type check
};

export const isNumber = (data: any): boolean => {
  // Consider narrowing the type if possible
  return typeof data === "number" && /^[0-9\+]*$/.test(data.toString()); // Added type check and toString()
};

export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randStr = (length: number = 12): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    str += chars.charAt(randomIndex);
  }
  return str;
};

export const dotsToHyphens = (inputString: string): string => {
  return inputString.replace(/\./g, "-");
};

export const hyphensToDots = (inputString: string): string => {
  return inputString.replace(/-/g, ".");
};

export const findPublicId = (url: string): string | undefined => {
  // Handle potential undefined
  try {
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];
    return lastPart.split(".")[0];
  } catch (error) {
    return undefined; // Or throw an error if appropriate
  }
};

export const createSlug = (title: string): string => {
  const cleanedTitle = title.replace(/[^\w\s]/gi, "").toLowerCase();
  return cleanedTitle.replace(/\s+/g, "-");
};

export const timeAgo = (date: string | Date): string => {
  // Accept string or Date
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - new Date(date).getTime();

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

export const generateRandomPassword = (length: number = 10): string => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

export const createOTP = (length: number = 5): string => {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};
