package com.loafer.config;

import com.loafer.convert.UserInfoConvert;
import com.loafer.model.UserInfo;
import com.loafer.model.Users;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * modelMapper配置类
 */
@Configuration
public class MapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        modelMapper.getConfiguration().setAmbiguityIgnored(true);

        createTypeMap(modelMapper);

        return modelMapper;
    }

    private void createTypeMap(ModelMapper modelMapper) {
        modelMapper.createTypeMap(Users.class, UserInfo.class)
                .addMappings(config -> config.using(new UserInfoConvert())
                        .map(Users::getUsername, UserInfo::setUsername));
    }
}
