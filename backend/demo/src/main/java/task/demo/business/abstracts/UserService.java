package task.demo.business.abstracts;

import task.demo.entities.concretes.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User getById(int id);
    User add(User user) throws Exception;
    //User getByPlaka_Id(String plaka);

}
