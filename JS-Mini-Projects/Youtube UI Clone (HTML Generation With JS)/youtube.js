

const video = [{
  iframe: 'https://www.youtube.com/embed/Jf0Ah28vgFU?si=14na6C0SEHhqVHQy',
  time: '2:50',
  profile: 'https://yt3.ggpht.com/ytc/AIf8zZTWHtMibOetiBxFSfTnmdmI08tSwMsYrlTGhSQE=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: 'Vilen - Jawani (Official Audio)',
      author: 'Darks Music Company',
      views: '1,893,567 views &#183; Premiered Sep 17, 2022'
    }
}, {
  iframe: 'https://www.youtube.com/embed/EFtBsMctfy0?si=spTaxx33KhONcMPI',
  time: '2:39',
  profile: 'https://yt3.ggpht.com/dBp34AexmrfPa80G_aEW6UmYq9u17gIE1QHoSwRqbLXiM-ajXOlgGqw2eUJlBT8YJwO7ilUnxQ=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: 'SHUBH - One Love',
      author: '4K Show',
      views: '82K views &#183; 12 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/MhXCj8E9CZU?si=K5sum4mOxyDWSXK3',
  time: '9:13',
  profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s48-c-k-c0x00ffffff-no-nd-rj',
    stat: {
      title: 'Aditya Rikhari - SAMJHO NA ( NASAMAJH )',
      author: 'Aditya Rikhari',
      views: '18M views &#183; 1 year ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/Xukxjs9VYiI?si=z1dxCbCS3Va5ktHI',
  time: '9:13',
  profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s48-c-k-c0x00ffffff-no-nd-rj',
    stat: {
      title: 'Aditya Rikhari - NASAMAJH',
      author: 'Aditya Rikhari',
      views: '5.8M views &#183; 1 year ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/boALQYYMbTI?si=NV3FgZNfP5AGEnbz',
  time: '12:48',
  profile: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Ram Mandir: The Untold Truth about Ram's Exile | Dhruv Rathee",
      author: 'Dhruv Rathee',
      views: '9.5M views &#183; 6 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/-uN1Q98UMO4?si=ABsXvkI8WbA-IGWY',
  time: '8:32',
  profile: 'https://yt3.ggpht.com/3MC9XX7rtxeS55uoOQG2nvJ7zaBd17r8Uh0yk_R3KyKjAK_u4RlHhZcTCkx4yym0guGWdefD5Q=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Most overpowered way to build mobile apps?",
      author: 'Beyond Fireship',
      views: '538K views &#183; 8 months ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/EKRdobRY-fc?si=Dwnl0iHS-u0m8BxE',
  time: '11:13',
  profile: 'https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Open source ka NAATAK",
      author: 'Chai aur Code',
      views: '79K views &#183; 10 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/lFqxenB9CX8?si=npXl4kM546XLR_y2',
  time: '17:02',
  profile: 'https://yt3.ggpht.com/eLYdQLsjImWTY0RHLlJFA9R9h64dQYpU_tI0ShcZAskhUm2yCXEXQrX9SSSFAkBFzCJ_RtckpzQ=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "50+ LPA Roadmap | ezSnippet | Neeraj Walia",
      author: 'Neeraj Walia',
      views: '261K views &#183; 7 days ago'
    }
}, {
  iframe: 'https://www.youtube.com/embed/DNPF0oPcMDs?si=gekcI05zNwjCWPwV',
  time: '52:32',
  profile: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s48-c-k-c0x00ffffff-no-rj',
    stat: {
      title: "Beau Carnes: Running the Largest Tutorial Channel - freeCodeCamp.org Podcast",
      author: 'freeCodeCamp.org',
      views: '24K views &#183; 3 days ago'
    }
}];

let videosHtml = '';

video.forEach((video) => {
  videosHtml = videosHtml + `
    <div class="video-preview">
        <div class="thumbnail-row">
          <iframe width="500" height="168.33" class="thumbnail" src="${video.iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="video-time">${video.time}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${video.profile}">
          </div>
        <div class="video-info">
          <p class="video-title">${video.stat.title}</p>
          <P class="video-author">${video.stat.author}</P>
          <p class="video-stats">${video.stat.views}</p>
        </div>
        </div>
      </div>
      `;
});

console.log(videosHtml);

document.querySelector('.video-grid').innerHTML = videosHtml;