package com.mynri.mynri.post.type;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TypeRepository extends CrudRepository<GameType, Long> {
    Optional<GameType> findByName(String name);
}
