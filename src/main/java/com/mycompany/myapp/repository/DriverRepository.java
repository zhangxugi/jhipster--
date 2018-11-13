package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Driver;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Driver entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
//根据名称查找
List<Driver> findByDnameLike(String dname);
}
