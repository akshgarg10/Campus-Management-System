package com.project.campusmanagement.repository;

import com.project.campusmanagement.model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
}

