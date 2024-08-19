import { prisma } from "./prisma";

export const getImages = async () => {
  try {
    const result = await prisma.upload.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed To Fetch Data Image");
  }
};

export const getImagesById = async (id: string) => {
  try {
    const result = await prisma.upload.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed To Fetch Data Image");
  }
};
