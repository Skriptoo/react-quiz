export  const generateUsername = () => {
  const adjectives = ["Funny", "Sneaky", "Amazing", "Unreal", "Scary", "Sad", "Sleepy", "Happy", "Silly", "Freaky"];
  const nouns = ["Dog", "Cat", "Parrot", "Raccon", "Elephant", "Lion", "Tiger", "Bear", "Wolf", "Camel", "Donkey", "Cameleon", "Monkey"];

  const randomUsername = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
  return randomUsername;

};