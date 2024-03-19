package com.mynri.mynri.post.warning;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WarningRepository extends CrudRepository<Warning, Long> {
    Optional<Warning> findByName(String name);
}
