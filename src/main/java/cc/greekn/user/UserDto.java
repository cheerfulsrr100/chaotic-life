package cc.greekn.user;

import lombok.Data;

import java.io.Serializable;

/**
 * <p>
 *
 * </p>
 *
 * @author Greekn
 * @version 0.1
 * @date 2022-03-02 22:59
 * @package cc.greekn.user
 * @modified Greekn
 * @description
 */
@Data
public class UserDto implements Serializable {
    private String userName;
    private String userPassword;
    private String userPhoneNumber;
    private String userEmail;
}
