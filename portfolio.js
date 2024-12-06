var aboutMeContentSectionState = 0;
var myStoryHeaderState = 0;
var workAtttituteHeaderState = 0;
var mySkillzHeaderState = 0;
var myEducationHeaderState = 0;

function onAboutMeReadMoreLinkClicked(){
    var aboutMeContentSection =
        document.getElementById('aboutMeContent');
    var aboutMeReadMoreLink =
        document.getElementById('aboutMeReadMoreLink');

    if(aboutMeContentSection != null && aboutMeReadMoreLink != null)
    {
        if(aboutMeContentSectionState == 0)
        {
            // show the content
            aboutMeContentSection.style.display = 'inline';
            aboutMeContentSectionState = 1;
            aboutMeReadMoreLink.innerHTML = 'Read Less';
        }
        else
        {
            // hide the content
            aboutMeContentSection.style.display = 'none';
            aboutMeContentSectionState = 0;
            aboutMeReadMoreLink.innerHTML = 'Read More';
        }
    }
}

function onMyStoryHeaderClicked(){
    var myStoryHeader = document.getElementById('myStoryHeader');
    var myStoryContent = document.getElementById('myStoryContent');

    if(myStoryHeader != null && myStoryContent != null)
    {
        if(myStoryHeaderState == 0)
        {
            // show the content
            myStoryHeaderState = 1;
            myStoryHeader.innerHTML = '- Background';
            myStoryContent.style.display = 'inline';
        }
        else
        {
            // hide the content
            myStoryHeaderState = 0;
            myStoryHeader.innerHTML = '+ Background';
            myStoryContent.style.display = 'none';
        }
    }
}

function onMySkillzHeaderClicked(){
    var mySkillzHeader = document.getElementById('mySkillzHeader');
    var mySkillzContent = document.getElementById('mySkillzContent');

    if(mySkillzHeader != null && mySkillzContent != null)
    {
        if(mySkillzHeaderState == 0)
        {
            // show the content
            mySkillzHeaderState = 1;
            mySkillzHeader.innerHTML = '- Knowledge';
            mySkillzContent.style.display = 'inline';
        }
        else
        {
            // hide the content
            mySkillzHeaderState = 0;
            mySkillzHeader.innerHTML = '+ Knowledge';
            mySkillzContent.style.display = 'none';
        }
    }
}


