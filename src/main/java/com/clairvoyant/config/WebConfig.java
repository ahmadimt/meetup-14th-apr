package com.clairvoyant.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import javax.servlet.DispatcherType;
import java.util.EnumSet;

/**
 * Created by Ruksad siddiqui on 12/4/18
 */
//@Configuration
//@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    if (!registry.hasMappingForPattern("/dist/**")) {
      registry.addResourceHandler("/dist/**").addResourceLocations("classpath:/dist/");
    }
    if (!registry.hasMappingForPattern("/static/**")) {
      registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }
    if (!registry.hasMappingForPattern("/**")) {
      registry.addResourceHandler("/**").addResourceLocations("classpath:/dist/");
    }
  }

  @Bean
  public InternalResourceViewResolver internalViewResolver() {
    InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
    viewResolver.setPrefix("/dist/");
    viewResolver.setSuffix(".html");
    viewResolver.setOrder(2);
    return viewResolver;
  }

  @Bean
  public FilterRegistrationBean webSecurityFiler() {
    FilterRegistrationBean registration = new FilterRegistrationBean();
    registration.setFilter(new ResponseHeaderFilter());
    registration.addUrlPatterns("/");
    registration.setDispatcherTypes(EnumSet.allOf(DispatcherType.class));
    return registration;
  }
}
