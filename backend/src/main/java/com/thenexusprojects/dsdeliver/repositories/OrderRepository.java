package com.thenexusprojects.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thenexusprojects.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}