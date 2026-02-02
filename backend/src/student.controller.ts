import { Router, Request, Response } from "express";
import { StudentService } from "./service/student.service";

const router = Router();
const service = new StudentService();

router.post("/students", async (req: Request, res: Response) => {
  const student = await service.createStudent(req.body);
  res.json(student);
});

router.get("/students", async (_req: Request, res: Response) => {
  const students = await service.getStudents();
  res.json(students);
});

router.get("/students/:id", async (req: Request, res: Response) => {
  const student = await service.getStudentById(req.params.id as string);
  res.json(student);
});

router.put("/students/:id", async (req: Request, res: Response) => {
  const student = await service.updateStudent(req.params.id as string as string, req.body);
  res.json(student);
});

router.delete("/students/:id", async (req: Request, res: Response) => {
  await service.deleteStudent(req.params.id as string);
  res.json({ message: "Deleted successfully" });
});

export default router;
