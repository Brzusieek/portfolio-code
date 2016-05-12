<section id="consultations" data-padding="10">
    <header>
        <h1 class="title-section">konsultacje</h1>
    </header>
    <article>
        <div class="set-ul-green-square">
            <?php
            $args = array(
                'post_status' => 'publish',
                'post_type'   => 'konsultacje'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) : $query->the_post();
                    $data = get_fields(get_the_ID());
                    echo $data['item_list'];
                    ?>
                <?php endwhile; else: ?>
                <p>Nie ma tekstu do wyświetlenia</p>
            <?php endif; ?>
        </div>
    </article>
</section>