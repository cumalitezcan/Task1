package task.demo.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import task.demo.business.abstracts.UserService;
import task.demo.dataAccess.abstracts.UserDao;
import task.demo.entities.concretes.User;

import java.util.List;

@Service
public class UserManager implements UserService {


    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        super();
        this.userDao = userDao;
    }

    @Override
    public List<User> getAll() {
        return this.userDao.findAll();

    }

    @Override
    public User getById(int id) {
        return this.userDao.getById(id);
    }

    @Override
    public User add(User user) {
        return this.userDao.save(user);
    }
}
