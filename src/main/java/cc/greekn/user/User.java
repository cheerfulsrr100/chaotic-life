package cc.greekn.user;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * chaotic_life_user
 *
 * @author
 */
@Data
public class User implements Serializable {

    private Integer userId;
    private String userName;
    private String userPassword;
    private String userPhoneNumber;
    private String userEmail;
    private LocalDateTime userCreateTime;
    private LocalDateTime userLastLoginTime;

}