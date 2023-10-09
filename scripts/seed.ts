const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Website Development" },
        { name: "Accounting" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Arts & Crafts" },
        { name: "Website Design" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
