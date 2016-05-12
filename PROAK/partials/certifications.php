<section id="certifications" data-padding="10">
    <header>
        <h1 class="title-section">certyfikaty</h1>
    </header>
    <article>
        <p class="text-center">Kliknij na wybrany obrazek aby powiększyć</p>
        <div id="certy" class="clearfix">
            <?php
            $args = array(
                'post_status' => 'publish',
                'post_type'   => 'certyfikaty'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) : $query->the_post();
                    $data = get_fields(get_the_ID());


                    $url = $data['dodaj_obrazek']['url'];

                    $size = 'thumbnail';
                    $thumb = $data['dodaj_obrazek']['sizes'][ $size ];
                    ?>

                    <?php
                    echo "
                        <span class='cert'
                        data-gall='certyfikaty'
                        href='{$url}'
                        title='{$data['tytul_certyfikatu']}'>
                            <img src='{$thumb}'
                            alt='Miniaturka {$data['tytul_certyfikatu']}'
                            title='{$data['tytul_certyfikatu']}'>
                         </span>
                    "
                    ?>


                <?php endwhile; else: ?>
                <p>Nie ma zdjęć do wyświetlenia</p>
            <?php endif; ?>
        </div>
    </article>
</section>