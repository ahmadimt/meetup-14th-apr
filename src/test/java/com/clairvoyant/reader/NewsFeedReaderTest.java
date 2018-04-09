package com.clairvoyant.reader;

import com.rometools.rome.feed.synd.SyndEntry;
import java.util.List;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by imteyaz on 09/04/18
 **/

@SpringBootTest
@RunWith(SpringRunner.class)
public class NewsFeedReaderTest {

  @Autowired
  private NewsFeedReader newsFeedReader;

  @Test
  public void shouldReadRssFeed() {
    String url = "https://spring.io/blog/category/news.atom";
    List<SyndEntry> syndEntries = newsFeedReader.readNewsFeed(url);
    Assert.assertEquals(20, syndEntries.size());
  }
}
