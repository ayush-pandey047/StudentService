import { StudentModel } from "../schema/student.schema";

export class StudentService {

  async createStudent(data: any) {
    return await StudentModel.create(data);
  }

  async getStudents() {
    return await StudentModel.find();
  }

  async getStudentById(id: string) {
    return await StudentModel.findById(id);
  }

  async updateStudent(id: string, data: any) {
    return await StudentModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteStudent(id: string) {
    return await StudentModel.findByIdAndDelete(id);
  }

}
