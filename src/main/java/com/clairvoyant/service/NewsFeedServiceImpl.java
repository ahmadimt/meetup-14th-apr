package com.clairvoyant.service;

import com.clairvoyant.model.NewsFeed;
import com.clairvoyant.repo.NewsFeedRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by imteyaz on 09/04/18
 **/

@Service
public class NewsFeedServiceImpl implements NewsFeedService {

  private final NewsFeedRepo newsFeedRepo;

  @Autowired
  public NewsFeedServiceImpl(NewsFeedRepo newsFeedRepo) {
    this.newsFeedRepo = newsFeedRepo;
  }

  @Override
  public List<NewsFeed> save(List<NewsFeed> newsFeeds) {
    return newsFeedRepo.saveAll(newsFeeds);
  }
}
