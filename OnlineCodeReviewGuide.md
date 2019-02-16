##온라인 코드 리뷰 방법

> 1. git, github

git이란?

**버전 관리 시스템**

[git입문](https://backlog.com/git-tutorial/kr/)



github란?

버전관리 + 협업관리를 도와주는 원격 저장소와 여러 서비스를 제공



먼저 깃과 깃허브에 대한 정보를 [git입문](https://backlog.com/git-tutorial/kr/)에서 공부한 뒤에 전체적인 온라인 코드 리뷰 과정은 아래에서 확인한다. 

[텍스트와 이미지로 살펴보는 온라인 코드 리뷰 과정](https://github.com/wwh-techcamp-2018/wwh-docs/blob/master/README.md)

[온라인 코드 리뷰 방법 영상](https://www.youtube.com/watch?v=a5c9ku-_fok&t=173s)



---

### How to do 'Reviewing Code'

> Master - fork - clone

먼저 관리자가 마스터에서 브랜치를 먼저 만들어준다. (모두 만들어진 상태)

멤버들은 **fork - clone**하여 **로컬**로 가져온다. single branch로 나의 branch만 가져온다.

fork : 새로운 원격 저장소를 복사하여 만드는 것

clone : 원격 저장소를 내 local로 복사하는 것

```bash
git clone -b (econo-cory) --single-branch (github 주소)
```

econo-cory : master에서 만든 브랜치 이름



보통 메인 브랜치에서 작업하지 않는다. 작업을 하기위한 브랜치를 추가로 생성한다.

```bash
git checkout -b step1
```



```bash
git branch -a
```

현재 나의 브랜치를 모두 확인 가능



> 과제 완료 - local

local 작업 - add - commit

```bash
git add .
git commit -m "step1 complete"
```

add로 변경사항을 올리고 커밋한다.



```bash
git push origin step1
```

push로 local의 커밋 정보를 나의 원격저장소에 올린다.

step1 브랜치에서 작업했으니 작업한 브랜치만 push해준다.

add, commit, push의 상세한 의미는 git입문 사이트에서 꼭 읽어보자.



저장소가 clone되면 origin이라는 리모트 저장소가 자동으로 등록되기 때문에 origin이라는 이름을 볼 수 있다.

위에 clone 했을 때에 origin으로 등록 되었으니 origin에 step1을 push한다.



> 과제 완료 - PR

푸쉬를 완료 했다면 **pull request**(이하 PR)을 진행한다.

PR은 깃헙 사이트에서 진행한다.

사이트 내에서 과제를 완료한 branch(step1)을 선택한 후에 New pull request를 한다.

**반드시 master가 아닌 자신의 브랜치로 PR을 진행**



멤버들은 PR에 대해 피드백을 서로 남겨주고 **관리자**가 **최종적으로 머지**를 해준다.

머지 기준은 과제 요건을 모두 만족했는지이다.



> 관리자가 최종 merge 후

이제까지 step1에서 작업했기 했기 때문에 계속 step1 branch에 있다.

step1 과제는 끝났기 때문에 **본인 브랜치**로 checkout한다.



머지된 코드르 내 local에 가져오기 위해서 추가적인 원격 저장소 등록이 필요하다.



**원격 저장소 추가**

```bash
remote add (처음 저장소의 remote 이름 ex, upstream) github주소 
```



```
git remote -v
```

현재 remote 상황을 볼 수 있음



> fetch

remote를 등록하고 fetch로 데이터를 가져온다.

fetch는 원격 저장소의 데이터를 **로컬**에 가져오기만 하는 것, 실제 반영은 되지 않는다.

```
git fetch (upstream) (econo-cory)
```

upstream에 있는 econo-cory이라는 branch만 내 로컬로 가져오라는 의미이다.

upstream은 임의의 이름이고 원하는 이름으로 바꿀 수 있지만 스터디에서는 upstream으로 통일한다.



pull : fetch + merge 를 합친 작업이다.

merge는 다른 브랜치의 내용을 현재 작업 중인 브랜치로 합쳐오는 작업

우리는 merge가 아닌 rebase를 사용할 것이다.



> rebase

[rebase상세문서](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0)

git만의 고유 기능으로 한 브랜치에서 다른 브랜치로 합치는 두가지 방법 중 하나. (merge, rebase)

merge와 유사하나 코드 변경 history를 조금 더 깔끔하게 정리해주는 기능이다.



```
git rebase upstream/econo-cory
```

내 로컬을 원격 저장소와 동기화



동기화를 무사히 끝마치면 내 econo-cory 브랜치는 내가 최종적으로 PR 날리고 머지가 된 코드들이 존재하게 된다.



```
git checkout -b step2
```

로 다시 step2를 시작하고 다시 반복해서 온라인 코드 리뷰를 진행한다.