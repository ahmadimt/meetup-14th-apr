package com.clairvoyant.service;

import com.clairvoyant.model.NewsFeed;
import com.clairvoyant.model.NewsFeedDto;
import com.clairvoyant.repo.NewsFeedRepo;
import java.util.List;
import java.util.Objects;
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

  @Override
  public NewsFeed updateNewsFeed(NewsFeedDto newsFeedDto) {
    NewsFeed newsFeed =  newsFeedRepo.findByTitle(newsFeedDto.getTitle());

    if (Objects.nonNull(newsFeed)){
      newsFeed = NewsFeed.from(newsFeed,newsFeedDto);
    }
    return newsFeedRepo.save(newsFeed);
  }
}
