var ip = msg.payload;
msg.payload = {
    "ip": ip
}
return msg;