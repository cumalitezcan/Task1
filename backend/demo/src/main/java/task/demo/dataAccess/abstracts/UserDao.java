package task.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import task.demo.entities.concretes.User;

public interface UserDao extends JpaRepository<User,Integer> {



    User getById(int id);
    User getByProvince(String province);
    User getByDistrict(String district);
}
