
const jwt=require("jsonwebtoken");
// decoden verify generate
// the funsction to generate is sign
const value={
    name:"siva",
    account:12345678
}

const token=jwt.sign(value,"secret");

console.log(token);

const ver=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2l2YSIsImFjY291bnQiOjEyMzQ1Njc4LCJpYXQiOjE3MDYyNDY1NzF9.pr2cZeL3SQqkI1VJuTlb06OpQpfolhhCPHPrEPMvm3M","secret");

console.log(ver);