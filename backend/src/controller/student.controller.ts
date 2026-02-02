import { Request, Response } from "express";
import { StudentService } from "../service/student.service";

const service = new StudentService();

export class StudentController {
  create = async (req: Request, res: Response) =>
    res.json(await service.createStudent(req.body));

  getAll = async (req: Request, res: Response) =>
    res.json(await service.getStudents());

  getOne = async (req: Request, res: Response) =>
    res.json(await service.getStudentById(req.params.id as string));

  update = async (req: Request, res: Response) =>
    res.json(await service.updateStudent(req.params.id as string, req.body));

  delete = async (req: Request, res: Response) => {
    await service.deleteStudent(req.params.id as string);
    res.json({ message: "Deleted successfully" });
  };
}
