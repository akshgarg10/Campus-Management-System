package com.project.campusmanagement.service;

import com.project.campusmanagement.model.Faculty;

import java.util.List;

public interface FacultyService {
    List<Faculty> getAllFaculties();

    Faculty getFacultyById(Long id);

    Faculty createFaculty(Faculty faculty);

    Faculty updateFaculty(Long id, Faculty faculty);

    void deleteFaculty(Long id);
}
