$(document).ready(function() {
    // 공지사항 등록 폼의 유효성 검사
    $('#noticeForm').on('submit', function(event) {
        var title = $('#noticeTitle').val().trim();  // title -> noticeTitle로 수정
        var content = $('#content').val().trim();

        // 제목 유효성 검사
        if (title === '') {
            alert('제목을 입력하세요.');
            $('#noticeTitle').focus();  // title -> noticeTitle로 수정
            event.preventDefault();
            return false;
        }

        // 내용 유효성 검사 (주석을 해제해도 됨)
        if (content === '') {
            alert('내용을 입력하세요.');
            $('#content').focus();
            event.preventDefault();
            return false;
        }
    });

    // 임시 저장 버튼 클릭 시 처리
    $('#tempSaveBtn').on('click', function() {
        $('#noticeTempSave').val('true'); // 임시 저장으로 플래그 설정
        $('#noticeForm').submit(); // 폼 제출
    });

    // 등록 버튼 클릭 시 처리 (기본값으로 정식 등록)
    $('#noticeForm button[type="submit"]').on('click', function() {
        $('#noticeTempSave').val('false'); // 등록으로 플래그 설정
    });
});
