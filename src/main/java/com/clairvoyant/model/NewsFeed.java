package com.clairvoyant.model;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndPerson;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by imteyaz on 09/04/18
 **/

@Document
@Getter
@Setter
@ToString
public class NewsFeed {

  @Id
  private String id;
  private String link;
  private String title;
  private String contents;
  private List<String> authors;
  private Date updatedDate;
  private Date publishedDate;

  public static List<NewsFeed> from(List<SyndEntry> syndEntries) {
    return syndEntries.stream().map(NewsFeed::from)
        .collect(Collectors.toList());
  }

  private static NewsFeed from(SyndEntry syndEntry) {
    NewsFeed newsFeedDetails = new NewsFeed();
    newsFeedDetails.setContents(syndEntry.getContents().get(0).getValue());
    newsFeedDetails.setLink(syndEntry.getLink());
    newsFeedDetails.setUpdatedDate(syndEntry.getUpdatedDate());
    newsFeedDetails.setAuthors(syndEntry.getAuthors().stream().map(NewsFeed::getName)
        .collect(Collectors.toList()));
    newsFeedDetails.setPublishedDate(syndEntry.getPublishedDate());
    newsFeedDetails.setUpdatedDate(syndEntry.getUpdatedDate());
    newsFeedDetails.setTitle(syndEntry.getTitle());
    return newsFeedDetails;
  }

  private static String getName(SyndPerson syndPerson) {
    return syndPerson.getName();
  }
}
