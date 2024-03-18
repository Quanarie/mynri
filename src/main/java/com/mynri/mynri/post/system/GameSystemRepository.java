package com.mynri.mynri.post.system;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameSystemRepository extends CrudRepository<GameSystem, Long> {
    Optional<GameSystem> findByName(String name);
}
