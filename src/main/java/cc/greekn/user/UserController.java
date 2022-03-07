package cc.greekn.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *
 * </p>
 *
 * @author Greekn
 * @version 0.1
 * @date 2022-03-02 0:57
 * @package cc.greekn.user
 * @modified Greekn
 * @description
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @ResponseBody
    ResponseEntity<Void> register(@RequestBody UserDto dto) {
        //userService.createUser(dto);
        return ResponseEntity.status(201).build();
    }



}
