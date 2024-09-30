package com.DOH.DOH.dto.chat;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
public class MessageDTO {
    private String sender; //발신자
    private String receiver; //수신자
    private String content; //메시지 내용
    private String profilePhoto; //프로필 이미지
    private LocalDateTime timestamp; //메시지 전송 시간
    private boolean isRead; //메시지 읽음 여부
    private boolean isSenderDeleted;
    private boolean isReceivedDeleted;

}