package cc.greekn;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * <p>
 *
 * </p>
 *
 * @author Greekn
 * @version 0.1
 * @date 2022-02-24 21:42
 * @package cc.greekn
 * @modified Greekn
 * @description
 */
@MapperScan("cc.greekn.*")
@SpringBootApplication
public class ChaoticLifeApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChaoticLifeApplication.class);
    }
}
