package com.clairvoyant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class MeetupApplication  {

  @Value("${com.clairvoyant.allowed.origins:*}")
  private String[] allowedOrigins;
  
  public static void main(String[] args) {
    SpringApplication.run(MeetupApplication.class, args);
  }

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins(allowedOrigins)
        .allowedMethods("GET", "POST","PUT", "DELETE");
      }
    };
  }
}
