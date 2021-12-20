package com.devsuperior.dscatalog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dscatalog.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}
