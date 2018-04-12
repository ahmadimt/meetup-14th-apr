package com.clairvoyant.repo;

import com.clairvoyant.model.NewsFeed;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by imteyaz on 09/04/18
 **/

public interface NewsFeedRepo extends MongoRepository<NewsFeed,String> {

  NewsFeed findByTitle(String title);
}
