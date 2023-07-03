package com.project.campusmanagement.service;

import com.project.campusmanagement.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAllStudents();
    Student getStudentById(int id);
    void deleteStudent(Student student);
}
