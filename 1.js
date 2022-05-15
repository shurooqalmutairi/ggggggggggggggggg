msg.doesBlackListMatch = false;
if(msg.payload.length < msg.ips.split(",").length) {
    msg.doesBlackListMatch = true;
}
return msg;