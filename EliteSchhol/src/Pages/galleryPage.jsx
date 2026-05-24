import "../style/gallery.css"
export default function Gallery() {
  const allInfo = [
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/661380925_1392713819326799_9193174532851689755_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wo9i7V9Q6sQQ7kNvwEICNWh&_nc_oc=AdrOWCs54k_FAK2Q8bzyAoJr-SqWS8onQSJvcQI7OWDdYb6jBE3mrFYyNu-iRl2BSmU&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=djbdgjA66K8BkOZ3Cl2wCQ&_nc_ss=7b289&oh=00_Af5yTNwmzLlyAXCC7XOReH-mjo17Lcqt2e_gqcWdGeRzfA&oe=6A189FF0",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/660536318_1392713635993484_6699213866455772909_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N6cEarfYNE0Q7kNvwG9ysdL&_nc_oc=AdqU8-jwA4J7bSRiTdy9PFsBI0ICZM3EHxCSmS2rVtmo2gEGMVihFwEvLJ7pWJy2JcA&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=b4NL1n0y3_vPk4BlcvNAwQ&_nc_ss=7b289&oh=00_Af6ofCbvpnlrE5DnlJnYjNo4bkOUsEo5eD1lfTm3MUcMYg&oe=6A18C288",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/660383518_1392713525993495_3885443204598257078_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a8eM8kjBpkEQ7kNvwHXURUh&_nc_oc=AdroOwlh8CuMODK5DI0IdaFLfZKQjUftVZt56uz53mNFQG2gkxV5ZMKypgwk3C99_QM&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=mD2vJ618IsDeolXAwJJpKg&_nc_ss=7b289&oh=00_Af4kGITS2h1p6bOm5dNrSsSSHoZgz1-MzBcrzWqOWEqliQ&oe=6A18AD69",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/661468278_1392713489326832_9099390006589964957_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lxZ8i0FMjCQQ7kNvwEHwTBt&_nc_oc=AdpVIvSjodcUHIFGCBq_i8My5JaFEexlisrpT7QynZUwQ40jD9avnJIjB9_v7YCdk70&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=oFXl1D_7VdEJxVPLJ70tGQ&_nc_ss=7b289&oh=00_Af65udau76vEQwP_EdeLK6KW_L7Wu5M_Se1r6HkQLINi6g&oe=6A189E66",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/660292406_1392713295993518_8162847748995152702_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8ldVsFRjiEoQ7kNvwGarpV2&_nc_oc=AdpyTj8VxlEVvcZiUzv_EXV0JvYq8ja_RXovo0zSFbIB9Weio0tlw_z0d6xbnDXUibw&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=fR-VbkYhgi5eCXVNUJPoGg&_nc_ss=7b289&oh=00_Af7gQHpd03fx_0Rn7lnnSBZduHYpto5KaGHWP_WLkUU75Q&oe=6A1894CD",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/663310846_1392713085993539_5886997075953875436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kETbZ8IjW2QQ7kNvwFrTYZn&_nc_oc=AdoanCybQZSIQ34v0GaNmXnPYiZcofCrlFBCdIRPc8IjIm1et-KztDoO88VLEkz_TQQ&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=Bb5Po137W9_PuItcxYsATA&_nc_ss=7b289&oh=00_Af7FuyjMXxrIvsdViqUwSIUm9X03ntpoY84Vq4XK6URi6w&oe=6A1892C0",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/662002407_1392713052660209_4396743323553628489_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0bHAKuP8sdoQ7kNvwEhVGaH&_nc_oc=AdpUp1iu3EpKVugrnA17I0Q98lEwZorbVpi_5PhE2hAJbk3rUoU8xAoVaxx400cvIG4&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=Qo4SkNizqZKg3_u7k0BPxg&_nc_ss=7b289&oh=00_Af6Z3WJAk2ErLjXwN6W9d9sv2kQsKsnQW742iViXdtoYIA&oe=6A188DDF",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/659743858_1392713005993547_2038103945862493746_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0qdF4rLydswQ7kNvwGHovt1&_nc_oc=AdrKw2cErAGA7uKadYUrGFXhQgVhsmCf13-ULIl4qWyodoZrBtPf7SqFhQG7Xly5lhM&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=uHuFfifFD_qNWYFiYZJV-g&_nc_ss=7b289&oh=00_Af5uUK_33L3HSHhC7PEK-wOyrqwTkF_dGYWY27CG_F8TYg&oe=6A188BBB",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/658137874_1392716512659863_8726642480200332498_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xYaINbF-c8oQ7kNvwGogm94&_nc_oc=Adqphg9a61Ds5gK9EfAhhX57BjZmCt56hdYus0YS0Bvrzv8ClQf_jypqE5LWStI7I2M&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=bPkf86tAXu3Ma0Jh-7rKAQ&_nc_ss=7b289&oh=00_Af5juTR2ug9IJcVtbPD9ZnqHjaCeJz53YlL5oWFvVCxzbw&oe=6A18C23B",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/659056458_1392712552660259_8661293284598841351_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mfoN_mqtVnQQ7kNvwFJDZ_Y&_nc_oc=AdrGas4MAtTnAd08dPoSrBen_wbrSGkWbU4E9FkFF3TXTpSdb0YD7mk4yPGeShuOqNc&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=eYO9Jjkkqaz55CG6oTmQgA&_nc_ss=7b289&oh=00_Af60reQj6auwNiZcRB8bRv-_M9VAu-3owz1OU4X88d_NOQ&oe=6A18BDC7",
    },
    {
      event: "Teacher",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/662543903_1392712195993628_3814251162526975792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9pbwif26C1UQ7kNvwHMaIC7&_nc_oc=Adrn5xBQCAPujy02YAL0toyrAau5mpwnG4tSNQE4hr_4KGPAon3IUtEB2_1qQHympXs&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=tFwJJVFmRulloLaQnGeShw&_nc_ss=7b289&oh=00_Af6X_8uMVSwfsmwRNIoeDze-csPzIT_fW6LF1ls2jiJFQA&oe=6A18B25D",
    },
    {
      event: "Student",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/662348912_1392712145993633_6970420003989251416_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AuMQ7Ur1CVsQ7kNvwERGi_1&_nc_oc=AdqnIZdOkLagYwXR-hdEJf-pxSXth02dyPWlxnmpwSCHKZH_kn_c4iUkmE3YPiL9pvQ&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=g8rIiw-y5IdWgkUCWw3ueQ&_nc_ss=7b289&oh=00_Af4tKyGirNRTT1ZSLfp-MQRe6q529DhABi2Xv7kWekMTww&oe=6A18B716",
    },
    {
      event: "Students",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/660297100_1392714809326700_4880124659945128813_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_SkawvCSBMQ7kNvwEAI3L4&_nc_oc=Adr2_r2fItNVjwrowGIneV3nMXMDwp2ppeTxIN0eE96kPUV-GaIyksnTmBuqYbxQbf8&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=IgajTgSD5QGaqU17JrtBAQ&_nc_ss=7b289&oh=00_Af4Dy5O2pjKp6TwNo838iMmKnDN9mhc3viX6b2MvzAYbnw&oe=6A188F09",
    },
    {
      event: "Students",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/659806057_1392711602660354_1018872561210054453_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FOq-RRfeVvMQ7kNvwHu84vL&_nc_oc=AdpYLuqp_UUSl-k9sQDdrtaB9Kr2ISTd2nZVDPtFe_QXec5u35TMtGiJ--jsEW2oakM&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=ZnSH5X9lo-KXBgdmSfKVhA&_nc_ss=7b289&oh=00_Af4ZY_YVgsIwHpdaKyWZoicp-FgRLoRFMpvmMX0z8Taxow&oe=6A18B0AA",
    },
    {
      event: "Graduated Student",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/597904057_1311617257436456_3225189580818977408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WLTqTcmjmV4Q7kNvwE610CM&_nc_oc=AdpSdjYCUFKtKjl-ELLVkS5eTG5RS2LyNb41IAaJ-8PAVLKDzdU38uGpYO6cy4wOwRw&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=OIfoIPOJsN9s3d2c0t-4PA&_nc_ss=7b289&oh=00_Af5mEQ8gLDEji7fCN9UEp2Ztf9aO-MkqsQNWddg7tthaHQ&oe=6A18AAC4",
    },
    {
      event: "Students",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/558622388_1257311286200387_7667312453973424874_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SNCdZITMWjEQ7kNvwGUbQuy&_nc_oc=Adr64lUsviQl6Tv7mh2n-aDFCG02ldIL_0LOEO33FFItN-35y5VdWmV7mPAEDSo_jcg&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=78pMsnjSICj_lW9XyNbAEQ&_nc_ss=7b289&oh=00_Af5fSdf98RannqYLobVM1HHlLchzzRveQNRTQxcxpJnwTA&oe=6A18BBD3",
    },
    {
      event: "Teacher",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/558659591_1257311212867061_9181757878854373600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4uJo8COgEIUQ7kNvwGpwMC2&_nc_oc=Adp1BHtvUD6FEGfGQYJmwq0OdBYuGp-rStiPKS-GjPUM8CJqO78fKwWgKGqvTySGXJM&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=7NLUuRE47Slq2Jh9nucUnw&_nc_ss=7b289&oh=00_Af6QN-oRMc-arZ9V0DVjIr_n3Caj4wwhr9sozVvgjFZJIg&oe=6A18956E",
    },
    {
      event: "Cultural Day",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/515504418_1204010641530452_8210853367080098229_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gQ6yozjNh1QQ7kNvwHzKagA&_nc_oc=AdqJEqGe_oBBFdxS7ZFV_sGZjV_JgDRIbqTZioZot1xQkuHXmc7to5B1-anVSD_gA2Y&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=NmIDR9mGSTO_yNwlAh-zbw&_nc_ss=7b289&oh=00_Af4HNAzgfFih8wm50JtWv4rZBexuu7NhU2_qPBx7RRVxKA&oe=6A18AB3D",
    },
    {
      event: "Cultural Day",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/526742021_1204009934863856_8369469743758001251_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S3d8M-eESQkQ7kNvwFslT47&_nc_oc=AdonqczaGbBg2dPRo_abjf3QZ1ZAL21UAlPGJd6uUvzrmdxq4Y9TQ9EZSwzdeY9g0fg&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=AJ-VVbFXL9f4K1hglCqNSg&_nc_ss=7b289&oh=00_Af4L0z8HHIYxLHLWwUF2gdap5WSdlyqfdCTihmSKnkaCgw&oe=6A18A011",
    },
    {
      event: "Graduated Student",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/528380070_1204009231530593_8429908830220228598_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-CmljXe7b80Q7kNvwEYRvcF&_nc_oc=Adqor48DY83gpC8rtGvticRMdABLurxzOdONFMlwiguiCg62Ib9hahjxZbI7zvi_9xM&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=577HHHAajbs5YQbruZSung&_nc_ss=7b289&oh=00_Af7NAsKtiTqYHopaH0nKJBljUNUbR2xyTL1OvorFc43r3Q&oe=6A18AE0B",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/489649855_1115476593717191_7699162933726793485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D89Lxg5e3_MQ7kNvwG3hny2&_nc_oc=AdqSg47ymOtfHhoSlQhNfYRn0HJu3jKj9Ls1UmhWnrwjDTj_84dQAcB-8X_oC4d8lvE&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=6-xwE71lH3Bil_afDlO9Kw&_nc_ss=7b289&oh=00_Af7c5FN1_O8BGdOsX1TGAiNMvZll4V26QEJ4ZW1ht9fEVg&oe=6A18A604",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/489846378_1114798677118316_1858788431861523064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TKYn_TFX8ncQ7kNvwEpSofH&_nc_oc=AdpNtNeL0ifxTx532-R8wG8pMor8UQlMQXHVRLosmD4fVYjlCS1qVDhjOI5uRbZKzII&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=yHkrEh8eHy9IPMZNMaKn9g&_nc_ss=7b289&oh=00_Af4fwl1LCveemwAjTkm4vhQpmb324bJARPcQexDL8WN8Wg&oe=6A189216",
    },
    {
      event: "Graduated Student",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/483921510_1092709289327255_7322559717058049870_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U85T3hBzDbMQ7kNvwEU2lZt&_nc_oc=Ado5AdYTFDGQ6swOERf7lPmfg4CNukGhmVEyl9WBs3A4lhgPjD_TD7RHfgQkHPNz2yQ&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=CC1qCni6rcy8lRnqzkt6BQ&_nc_ss=7b289&oh=00_Af7nBEjmswFIu7T1hZW1bCt2PYUw_KQJMoDYDsc6cHUapw&oe=6A18A357",
    },
    {
      event: "Graduated Student",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/484113855_1092709272660590_7103627778136205819_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TATkhB3-uEcQ7kNvwG88p2V&_nc_oc=AdpLINoxZ19Lm5Rg78VEYhx98cg_DvmitbC3DOIeXyIR6d8vYbEayh1ldtJZcaJGjqU&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=vIurjSohFvd-_vW2sgUDvA&_nc_ss=7b289&oh=00_Af5KbwfJs4vW2LXM6v-x2wocxNI19j1-xuGFKP8mKYYBqg&oe=6A18A4D4",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/482252421_1088976929700491_3261850915545724603_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6tMrBodFg88Q7kNvwFQ2S8Y&_nc_oc=AdrcWq4Idg-Ysi0Ti8pSlmowskfYmS21YNAS059CVwJOQj0KmxVqgueQF3571dLgISA&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=Gr6rMWY7e7hijwX8gqvc4w&_nc_ss=7b289&oh=00_Af7tIIqhhPdG_4mPxrV7TjK4LXmgvQrwbMStlWnrLL_qgw&oe=6A18B480",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/482252421_1088976929700491_3261850915545724603_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6tMrBodFg88Q7kNvwFQ2S8Y&_nc_oc=AdrcWq4Idg-Ysi0Ti8pSlmowskfYmS21YNAS059CVwJOQj0KmxVqgueQF3571dLgISA&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=Gr6rMWY7e7hijwX8gqvc4w&_nc_ss=7b289&oh=00_Af7tIIqhhPdG_4mPxrV7TjK4LXmgvQrwbMStlWnrLL_qgw&oe=6A18B480",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/482249865_1088761309722053_6897216069056200064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=v4YAVFxWFHsQ7kNvwEyp78U&_nc_oc=Adpd6O84LqUcO9TeVv_dJ1XJyNJ1bAuYtMkcKC4hDPh9nreKMN2smB8ZTVKzv1Ao1Pg&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=TXgzkiIvmvx6fC6C-SVcDw&_nc_ss=7b289&oh=00_Af70vMeo9N2WYdhVpQlzLOzKU3X6wYd81GXEG8pTBdF7mw&oe=6A18C71A",
    },
    {
      event: "Execution",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/481813123_1088761453055372_8664856100541002513_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EJ46LHayMMYQ7kNvwFuXvIo&_nc_oc=AdokIRpqd4B2dAuZDx4ufG8JrhnKnwGCdEoSR4Vr5pDx-sYUHCZWh38T0dYtjM-Cgzw&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=CWbTWejGryMVtPJmLB0QnQ&_nc_ss=7b289&oh=00_Af4ZP1EGZCbugN0Ez2swNf36rWNsJZeiE4tzDEhUAa70wQ&oe=6A18A563",
    },
    {
      event: "Teacher",
      image:
        "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/517097623_24857223993866053_1580907831319604640_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=691qMRpyBTEQ7kNvwEYnlEJ&_nc_oc=Adp721OtDOEyUXi28ZV1ap5I95kzSDzfOktmYj-bgo4-PVuHXVR2QBbY6tJwaSOR7cs&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=FGxA7pBuRq_AuHgCX15-TQ&_nc_ss=7b289&oh=00_Af6CEdWELm6Sbzh0myx65QT2rutaAP3kgL453i2mz7qbQg&oe=6A18A054",
    },
    {
      event: "Teacher",
      image:
        "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/516423233_24857223947199391_2687190036853866828_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dnchkLj8GowQ7kNvwE3jkYV&_nc_oc=AdrOA-JPE5CFY3IO8-GhHHww4jUC-2gOlxt9lNLfnaFJ2cOWrVCJFLb3diVl3DAglNU&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=xI3wQ2nQxCvVVNUzXBt8_g&_nc_ss=7b289&oh=00_Af5qMvj3pD46SfZcwIgywJKgLctS5yweCcL-x6Tqc-xIrg&oe=6A18C9D9",
    },
  ];

  return (
    <div className="gallery-page">
      <h1>OUR GALLERY</h1>
      <h2 className="moments">Moments at Elite</h2>
      <p className="gallery-info">
        Browse photos and videos from events, activities, and everyday school
        life.
      </p>

      <div className="all-gallery">
  {allInfo.map((item, index) => {
    return (
      <div
        key={index}
        className={`gallery-card ${
          (index + 1) % 3 === 0 ? "special-img" : ""
        }`}
      >
        <img src={item.image} alt={item.event} />

        <div className="overlay">
          <h2 className="events">{item.event}</h2>
        </div>
      </div>
    );
  })}
</div>
    </div>
  );
}
