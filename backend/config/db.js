import mongoose from "mongoose";

export const conntectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tarsinterstellar010:ApGojush3u6uIo2c@cluster0.hrod5ba.mongodb.net/wylo"
    )
    .then(() => console.log("DB conntected"));
};
