package com.project.campusmanagement.controller;

import com.project.campusmanagement.model.Student;
import com.project.campusmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.getAllStudents();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id, @RequestBody Student updatedStudent){
        Student student = studentService.getStudentById(id);

        if (student != null) {
            student.setName(updatedStudent.getName());
            student.setBranch(updatedStudent.getBranch());
            student.setYear(updatedStudent.getYear());

            studentService.saveStudent(student);
            return "Student updated successfully";
        } else {
            return "Student not found";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        Student student = studentService.getStudentById(id);

        if (student != null) {
            studentService.deleteStudent(student);
            return "Student deleted successfully";
        } else {
            return "Student not found";
        }
    }
}

