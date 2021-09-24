package task.demo.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import task.demo.business.abstracts.UserService;
import task.demo.entities.concretes.User;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UsersController {

    private UserService userService;

    @Autowired
    UsersController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/getall")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    @PostMapping("/add")
    public User add(@RequestBody User user) {
        return this.userService.add(user);
    }

}
