const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");
client.subscribe("temp");

client.on("message", (topic, data) => {
  console.log(`${topic} : ${data}`)
});
