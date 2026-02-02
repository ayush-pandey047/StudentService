import { Router } from "express";
import { StudentService } from "../service/student.service";
import { Request, Response } from "express";

const router = Router();
const service = new StudentService();

router.post("/", async (req: Request, res: Response) => {
  const student = await service.createStudent(req.body);
  res.json(student);
});

router.get("/", async (_req: Request, res: Response) => {
  res.json(await service.getStudents());
});

router.get("/:id", async (req: Request, res: Response) => {
  res.json(await service.getStudentById(req.params.id as string));
});

router.put("/:id", async (req: Request, res: Response) => {
  res.json(await service.updateStudent(req.params.id as string, req.body));
});

router.delete("/:id", async (req: Request, res: Response) => {
  await service.deleteStudent(req.params.id as string);
  res.json({ message: "Deleted successfully" });
});

export default router;
