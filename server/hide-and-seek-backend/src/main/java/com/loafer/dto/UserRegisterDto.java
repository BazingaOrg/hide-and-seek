package com.loafer.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
@ApiModel("用户注册请求类")
public class UserRegisterDto {

    @NotEmpty(message = "用户名不能为空")
    @ApiModelProperty(value = "用户名", required = true)
    private String username;

    @NotEmpty(message = "密码不能为空")
    @ApiModelProperty(value = "密码", required = true)
    private String password;

    @NotEmpty(message = "电子邮件不能为空")
    @ApiModelProperty(value = "电子邮件", required = true)
    private String email;

    @NotEmpty(message = "名字不能为空")
    @ApiModelProperty(value = "名字", required = true)
    private String firstName;

    @NotEmpty(message = "姓氏不能为空")
    @ApiModelProperty(value = "姓氏", required = true)
    private String lastName;

    @ApiModelProperty("电话号码")
    private String phone;

    @ApiModelProperty("地址")
    private String address;

    @ApiModelProperty("城市")
    private String city;

    @ApiModelProperty("州/省份")
    private String state;

    @ApiModelProperty("国家")
    private String country;

    @ApiModelProperty("邮政编码")
    private String postalCode;

}
