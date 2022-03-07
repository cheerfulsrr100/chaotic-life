package cc.greekn.user;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *
 * </p>
 *
 * @author Greekn
 * @version 0.1
 * @date 2022-03-02 0:13
 * @package cc.greekn.user
 * @modified Greekn
 * @description
 */
@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    void createUser(UserDto userDto) {
        User user = new User();
        if (userDto.getUserName().isEmpty() || userDto.getUserPassword().isEmpty())
            throw new IllegalArgumentException("user name is empty");
        BeanUtils.copyProperties(userDto, user);
        userDao.insert(user);
    }

}
