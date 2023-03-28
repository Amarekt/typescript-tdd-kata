import * as dotenv from 'dotenv';

export default function Reflexion() {
  dotenv.config();
  const className:string = process.env.CLASS_NAME!.toString();
  return Reflect.construct((global as any)[className], []);
}